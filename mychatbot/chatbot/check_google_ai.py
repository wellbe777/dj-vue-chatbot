from google import genai
import os

# Initialize the GenAI client
client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))

# Attempt to generate content
try:
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents="Hello, world!"
    )
    print("GenAI response:", response.text)
except Exception as e:
    print("Error communicating with GenAI:", e)

