from flask import Flask, render_template
#select interpreter, select scripts/python.exe

app = Flask(__name__, template_folder=".")

@app.route("/")
def hello():
    # return "Hello, world!"
    return render_template("/index.html")

@app.route("/blockchain")
def blockchain():
    return render_template("blockchain.html")

if __name__ == "__main__":
    app.run(debug=True, port=3001)

    

