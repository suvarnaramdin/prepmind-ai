from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
from PyPDF2 import PdfReader
import os

load_dotenv()

# Create uploads folder automatically
os.makedirs("uploads", exist_ok=True)

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return jsonify({
        "message": "PrepMind AI Backend Running"
    })


# Questions API
@app.route("/questions")
def questions():

    questions_list = [
        "Explain the difference between SQL and NoSQL databases.",
        "What is React and why is it used?",
        "Explain normalization in DBMS.",
        "What are API endpoints?",
        "Difference between authentication and authorization?"
    ]

    return jsonify({
        "questions": questions_list
    })


# Resume Upload API
@app.route("/upload-resume", methods=["POST"])
def upload_resume():

    try:

        if "resume" not in request.files:
            return jsonify({
                "error": "No file uploaded"
            })

        file = request.files["resume"]

        if file.filename == "":
            return jsonify({
                "error": "No file selected"
            })

        filepath = os.path.join("uploads", file.filename)

        file.save(filepath)

        # Read PDF
        reader = PdfReader(filepath)

        text = ""

        for page in reader.pages:

            extracted = page.extract_text()

            if extracted:
                text += extracted

        # Lowercase for matching
        text_lower = text.lower()

        generated_questions = []

        # Skill-based questions
        if "react" in text_lower:
            generated_questions.append(
                "Explain React hooks and their advantages."
            )

        if "python" in text_lower:
            generated_questions.append(
                "What are Python decorators?"
            )

        if "sql" in text_lower or "mysql" in text_lower:
            generated_questions.append(
                "Explain normalization in DBMS."
            )

        if "javascript" in text_lower:
            generated_questions.append(
                "Explain closures in JavaScript."
            )

        if "html" in text_lower or "css" in text_lower:
            generated_questions.append(
                "Difference between Flexbox and Grid?"
            )

        # Default questions
        if len(generated_questions) == 0:

            generated_questions = [
                "Tell me about yourself.",
                "Explain your biggest project.",
                "What are your strengths?"
            ]

        return jsonify({
            "message": "Resume uploaded successfully",
            "resume_text": text[:1500],
            "questions": generated_questions
        })

    except Exception as e:

        print("UPLOAD ERROR:", e)

        return jsonify({
            "error": str(e)
        })


# AI Evaluation API
@app.route("/evaluate", methods=["POST"])
def evaluate():

    data = request.json
    answer = data.get("answer", "").lower()

    score = 40
    strengths = []
    weaknesses = []
    tips = []

    if "structured" in answer or "schema" in answer:
        score += 15
        strengths.append("Understood structured databases")

    if "scalable" in answer:
        score += 15
        strengths.append("Mentioned scalability concepts")

    if "table" in answer or "relational" in answer:
        score += 15
        strengths.append("Explained relational database concepts")

    if "mongodb" in answer or "document" in answer:
        score += 15
        strengths.append("Included NoSQL examples")

    if len(answer) < 40:
        weaknesses.append("Answer is too short")
        tips.append("Add more technical explanation")

    if "example" not in answer:
        weaknesses.append("No real-world examples included")
        tips.append("Include examples like MySQL or MongoDB")

    if score > 100:
        score = 100

    return jsonify({
        "score": score,

        "strengths": strengths if strengths else [
            "Basic understanding shown"
        ],

        "weaknesses": weaknesses if weaknesses else [
            "Minor improvements needed"
        ],

        "tips": tips if tips else [
            "Try adding more advanced concepts"
        ],

        "ideal_answer":
        "SQL databases are relational databases that use structured schemas and tables. NoSQL databases are flexible, scalable, and document-based like MongoDB."
    })


if __name__ == "__main__":
    app.run(debug=True)