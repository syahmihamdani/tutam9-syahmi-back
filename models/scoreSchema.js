const ScoreSchema = new mongoose.Schema({
    name: String,
    quiz_id: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
    score: Number,
    created_at: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model("Score", ScoreSchema);
  