import flask

app = flask.Flask(__name__)

@app.route("/")
def index():
    return flask.render_template("html/index.html")

@app.route("/download")
def download():
    return flask.render_template("html/downloads.html")

app.run(host="0.0.0.0", port=8080)