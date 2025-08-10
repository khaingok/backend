const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    username: { type: String, required: true },
    highScore: { type: Number, default: 0 }
});
const Score = mongoose.model('Score', scoreSchema);

router.post('/api/save-score', async (req, res) => {
    const { username, score } = req.body;

    if (!username || typeof score === 'undefined') {
        return res.status(400).json({ message: 'Thiếu thông tin username hoặc score' });
    }

    try {
        let userScore = await Score.findOne({ username });

        if (userScore) {
            if (score > userScore.highScore) {
                userScore.highScore = score;
                await userScore.save();
                res.json({ message: `Đã cập nhật điểm cao mới cho ${username}!` });
            } else {
                res.json({ message: `Điểm số không cao hơn điểm cũ của ${username}.` });
            }
        } else {
            const newUserScore = new Score({ username, highScore: score });
            await newUserScore.save();
            res.json({ message: `Đã lưu điểm lần đầu cho ${username}!` });
        }
    } catch (error) {
        console.error("Lỗi khi lưu điểm:", error);
        res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
    }
});

module.exports = router;
