from flask import (
    Flask,
    render_template,
    redirect,
    request,
    url_for,
    send_from_directory,
)
import json
import bcrypt


app = Flask(__name__)


@app.route("/")
def home():
    return redirect(url_for("login_page"))


@app.route("/login")
def login_page():
    return render_template("login.html")

# permet à un utilisateur de s'authentifier
#et verifie si les info entrées correspondent à ceux de la bd
@app.route("/login", methods=["POST"])
def authentification():
    user_data = "./bdd/user.json"
    user = request.form
    data = []

    with open(user_data, "r") as file:
        data = json.load(file)

    msg = "Username or password incorrect"

    for i in range(len(data)):
        if user["username"] == data[i]["email"]:
            if user["mdp"] == data[i]["mdpr"]:
                return render_template("index.html")
                """ return send_from_directory("templates", "index.html") """
            else:
                msg = "Mot de passe non valide !"
        else:
            msg = "Le mail saisie n'a pas de compte sur notre site. Veuillez vous inscrire !"

    return render_template("login.html", error=msg)


# permet de traiter le formulaire d'inscription
@app.route("/formRegister")
def formregister_page():
    return render_template("formRegister.html")

@app.route("/formRegister", methods=["POST"])
def formregister():
    user_data = "./bdd/user.json"
    user = request.form

    # Hacher le mot de passe avec le sel
    """ hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    user = User(email=email, hash=hashed) """

    with open(user_data, "r") as file:
        data = json.load(file)

    msg = "Le mail que vous avez renseigné est deja inscrit sur notre site!"
    for i in range(len(data)):
        if user["email"] == data[i]["email"]:
            return render_template("formRegister.html", error=msg)

    def recup_info_users():
        with open(user_data, "r") as file:
            users_information = json.load(file)
        return users_information

    users = recup_info_users()
    users.append(user)
    print(users)
    with open(user_data, "w") as file:
        json.dump(users, file)

    return redirect(url_for("login_page"))

    

if __name__ == "__main__":
    app.run(debug=True)
