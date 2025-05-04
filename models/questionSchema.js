const QuestionSchema = new mongoose.Schema({
    quiz_id: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
    title: String,
    prompt: String,
    correct_answer: String,
    image_url: String
  });
  
  module.exports = mongoose.model("Question", QuestionSchema);
  