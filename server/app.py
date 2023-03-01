from flask import Flask, render_template, request
import openai
import json

app = Flask(__name__)

# Set up OpenAI API credentials
openai.api_key = "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"

# Define a route for the home page
# @app.route('/')
# def home():
#     return render_template('home.html')



@app.route('/process', methods=['POST'])
def process():
    # Get user input text
    user_text = request.form['user_text']

    # Add predefined text
    predefined_text = """  
    Using the text before this sentence, pretend you are a marketing agency. 

    I want you to generate a brief for the company, seperated into these topics: Background, Objective, Target Audience, and Brand Guidelines. Separate each topic with an empty line and do not include empty lines anywhere else. Be as thorough as possible and include as much information as possible. Prioritize company growth and expansion. Make sure all topics are covered.
      """
    combined_text = predefined_text + user_text

    # Send combined text to OpenAI GPT-3 API
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=combined_text,
        temperature=0.9,
        max_tokens=2048,
        n = 1,
        stop=None
    )
    output_text = response.choices[0].text

    print(output_text)

    # Extract relevant sections from output
    background_text = ""
    objective_text = ""
    target_audience_text = ""
    brand_guidelines_text=""
    for line in output_text.split("\n\n"):
        if "background:" in line.lower():
            background_text += line + "\n"
        elif "objective:" in line.lower():
            objective_text += line + "\n"
        elif "target audience:" in line.lower():
            target_audience_text += line + "\n"
        elif "brand guidelines:" in line.lower():
            brand_guidelines_text += line + "\n"

    # Render output template
    return json.dumps({
        'background': background_text, 
        'objective': objective_text, 
        'target_audience': target_audience_text,
        'brand_guidelines': brand_guidelines_text}
    )


if __name__ == '__main__':
    app.run(debug=True, port=5000)