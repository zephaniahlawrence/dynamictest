import sqlite3
# import hashlib
from flask import Flask, jsonify, render_template, redirect, request, session
from flask_session import Session
from flask_cors import CORS # Required for handling Cross-Origin Resource Sharing
# from flask_login import current_user, login_required
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv


load_dotenv()

app = Flask(__name__)
CORS(app) # Enable CORS for all routes, adjust as needed for production

app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

userdb = "userdata.db"
# message = 'x'

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")




try:
    connection = sqlite3.connect(userdb)
    print(f"Database '{userdb}' created and connected successfully.")

    cursor = connection.cursor()
    cursor.execute("CREATE TABLE IF NOT EXISTS userdata (id INTEGER PRIMARY KEY, fullname VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL UNIQUE, phonenumber INTEGER NOT NULL UNIQUE, password VARCHAR(255) NOT NULL, profileimage VARCHAR(255) NOT NULL DEFAULT 'static/images/defaultprofilepicture.png', membership VARCHAR(255) NOT NULL DEFAULT 'Not Subscribed', address VARCHAR(255) NOT NULL DEFAULT 'No Address', purchases TEXT NOT NULL DEFAULT 'No Purchases', notifications TEXT DEFAULT 'Welcome to Faithfully Lashed!\nPrepare for relaxing at-home visits by updating your address in the profile section of your account''s dashboard!--end--', registration TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP || ' UTC'), admin INTEGER DEFAULT 0)")
    print("Table 'userdata' created successfully (if it didn't exist).")
    # (DATETIME('now', 'localtime')
    # UTC - 5hrs = CST

    connection.commit()
    connection.close()
    print("Connection closed.")


except sqlite3.OperationalError as e:
    print(f"Failed to create/open database: {e}")



def get_database_data():
    # Connect to the database file (e.g., 'your_database.db')
    connection = sqlite3.connect(userdb)
    # Use a Row factory for easier column access (e.g., row['column_name'])
    # conn.row_factory = sqlite3.Row
    cursor = connection.cursor()

    # Execute an SQL SELECT query
    cursor.execute("SELECT * FROM userdata")

    # Fetch all the results
    data = cursor.fetchall()

    # Close the connection
    connection.close()

    return data


@app.route('/register', methods=['POST'])
def register():
    if request.method == 'POST' and 'useremail' in request.form:
        fullname = request.form.get('userfullname')
        phonenumberraw = request.form.get('userphone')
        phonenumber = phonenumberraw.replace("-",'')
        email = request.form.get('useremail')
        password = request.form.get('userpassword')
        save_to_database(fullname, phonenumber, email, password)

        recipient = email
        subject = f"Welcome to Faitfully Lashed, {fullname}!"
        body = f"Welcome to Faithfully Lashed, {fullname}!\n\nYou've successfully registered your account with us!\n\nFor future reference, sign into your account using either your phone number or email!\n\nLastly, please confirm your account information below and remember to keep it safe.\n\nIf there's an issue with your information below, please send a response to this email with the problem detailed within it.\n\nE-mail: {email}\nPhone Number: {phonenumberraw}\nPassword: {password}\n\nThanks again for signing up with Faithfully Lashed!"
        send_email(recipient, subject, body)

        return 'Registered successfully!'

    else:
        return 'No form submitted.'


@app.route('/signin', methods=['POST'])
def signin():
    if request.method == 'POST' and 'usersignin' or 'passwordsignin' in request.form:
        usersigninraw = request.form.get('usersignin')
        usersignin = usersigninraw.replace("-", '')
        passwordsignin = request.form.get('passwordsignin')

        status, message, idx, fullnamex, firstnamex, emailx, phonenumberx, passwordx, profileimagex, membershipx, addressx, purchasesx, notificationsx, registrationx, adminx = check_user_credentials(usersignin, passwordsignin)
        user = {"status": status, "message": message, "id": idx, "fullname": fullnamex, "firstname": firstnamex, "email": emailx, "phonenumber": phonenumberx, "password": passwordx, "profileimage": profileimagex, "membership": membershipx, "address": addressx, "purchases": purchasesx, "notifications": notificationsx, "registration": registrationx, "admin": adminx}

        if status is True:
            # return message
            session["usersignin"] = request.form.get("usersignin")
            return user

        elif status is False:
            return user

    else:
        return 'No form submitted.'




# update userdata set profileimage = 'static/images/testpic1.jpg' where id = 1;






# @app.route('/formprocessor', methods=['GET', 'POST'])
# def formprocessor():
#     if request.method == 'POST' and 'useremail' in request.form:
#         fullname = request.form.get('userfullname')
#         phonenumber = request.form.get('userphone')
#         email = request.form.get('useremail')
#         password = request.form.get('userpassword')
#         save_to_database(fullname, phonenumber, email, password)

#         recipient = email
#         subject = f"Welcome to Faitfully Lashed, {fullname}!"
#         body = f"Welcome to Faithfully Lashed, {fullname}!\n\n You've been successfully registered to Faithfully Lashed!\n For future reference, sign in using your phone number or email!\n\n Lastly, please confirm your password below, and remember to keep it safe.\n\n E-mail: {email}\n Phone Number: {phonenumber}\n Password: {password}"
#         send_email(recipient, subject, body)

#         print("break1")
#         return 'Registered successfully!'

#     elif request.method == 'POST' and 'usersignin' or 'passwordsignin' in request.form:
#         usersignin = request.form.get('usersignin')
#         passwordsignin = request.form.get('passwordsignin')

#         status, message, idx, fullnamex, emailx, phonenumberx, passwordx, adminx = check_user_credentials(usersignin, passwordsignin)
#         print("signin-break")

#         if status is True:
#             print("signin-true-break")
#             # return jsonify(message)
#             return message

#         elif status is False:
#             return message

#     else:
#         print("nfs-break")
#         return 'No form submitted.'




# @app.route('/dashboard')
# def dashboard():
#     print(message)
#     return jsonify(value=message)




def save_to_database(fullname, phonenumber, email, password):
    connection = sqlite3.connect(userdb)
    cursor = connection.cursor()

    try:
        # SQL statement with placeholders
        sql = "INSERT INTO userdata (fullname, phonenumber, email, password) VALUES (?, ?, ?, ?)"
        # Execute the statement with data as a tuple
        cursor.execute(sql, (fullname, phonenumber, email, password))

        # Commit the changes to the database
        connection.commit()
        print("Data committed successfully.")

    except sqlite3.Error as e:
        print(f"Database error: {e}")
        # Handle the error appropriately
    finally:
        # Always close the connection
        connection.close()
        print("Connection closed successfully.")



def check_user_credentials(usersignin, passwordsignin):
    connection = sqlite3.connect('userdata.db') # Connect to the database
    cursor = connection.cursor()

    # Use a prepared statement to safely query the database
    query = "SELECT * FROM userdata WHERE email = ? OR phonenumber = ?"
    # print([(user_input)])
    cursor.execute(query, (usersignin, usersignin))

    # Fetch the first matching row
    result = cursor.fetchone()
    connection.close()

    if result:
        # A user was found, now compare the password (e.g., using a secure hash comparison)
        # stored_password = result[4]
        id = result[0]
        fullname = result[1]
        email = result[2]
        phonenumber = result[3]
        password = result[4]
        profileimage = result[5]
        membership = result[6]
        address = result[7]
        purchases = result[8]
        notifications = result[9]
        registration = result[10]
        admin = result[11]
        # print(id, fullname, email, phonenumber, password, admin)

        # In a real application, you would use a secure library to compare hashes
        if password == passwordsignin: # Simplified comparison
            # print(id, fullname, email, phonenumber, password, admin)
            status = True
            # message = f"Signed in successfully. Welcome back, {fullname}!"
            idx =id
            fullnamex = fullname
            firstnamex = fullname.split()[0]
            emailx = email
            phonenumberx = phonenumber
            passwordx = password
            profileimagex = profileimage
            membershipx = membership
            addressx = address
            purchasesx = purchases
            notificationsx = notifications.split('--end--')
            registrationx = registration
            adminx = admin
            message = f"Welcome back, {firstnamex}!"
            # f"Signed in successfully.<br>Welcome back, {firstnamex}!"

            # print(idx, fullnamex, emailx, phonenumberx, passwordx, adminx)
            return status, message, idx, fullnamex, firstnamex, emailx, phonenumberx, passwordx, profileimagex, membershipx, addressx, purchasesx, notificationsx, registrationx, adminx  # Credentials match
        else:
            idx = "empty"
            fullnamex = "empty"
            firstnamex = "empty"
            emailx = "empty"
            phonenumberx = "empty"
            passwordx = "empty"
            profileimagex = "empty"
            membershipx = "empty"
            addressx = "empty"
            purchasesx = "empty"
            notificationsx = "empty"
            registrationx = "empty"
            adminx = "empty"
            status = False
            message = f"Incorrect password."
            # return status, message # Password incorrect
            return status, message, idx, fullnamex, emailx, phonenumberx, passwordx, profileimagex, membershipx, addressx, purchasesx, notificationsx, registrationx, adminx
    else:
        idx = "empty"
        fullnamex = "empty"
        firstnamex = "empty"
        emailx = usersignin
        phonenumberx = usersignin
        passwordx = "empty"
        profileimagex = "empty"
        membershipx = "empty"
        addressx = "empty"
        purchasesx = "empty"
        notificationsx = "empty"
        registrationx = "empty"
        adminx = "empty"
        status = False
        message = f"User '{usersignin}' not found."
        # return status, message # User not found
        return status, message, idx, fullnamex, emailx, phonenumberx, passwordx, profileimagex, membershipx, addressx, purchasesx, notificationsx, registrationx, adminx
    #     return render_template("index.html", name=session.get("name")) # Redirect to a dashboard or home page




def send_email(recipient_email, subject, body):
    try:
        msg = MIMEMultipart()
        msg['From'] = EMAIL_ADDRESS
        msg['To'] = recipient_email
        msg['Subject'] = subject

        msg.attach(MIMEText(body, 'plain'))

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.sendmail(EMAIL_ADDRESS, recipient_email, msg.as_string())

        print("E-mail sent successfully. Return Code 200 OK Successful")
    except Exception as e:
        if e == "(334, b'UGFzc3dvcmQ6')":
            print(f"Error sending e-mail:{e}, failed authentication.")
        else:
            print(f"Error sending e-mail:{e}, failed authentication.")



def delete_user(useremail):
    connection = sqlite3.connect('userdata.db') # Connect to the database
    cursor = connection.cursor()

    # Use a prepared statement to safely query the database
    query = "DELETE FROM userdata WHERE email = ?"
    # print([(user_input)])
    cursor.execute(query, (useremail,))

    # Fetch the first matching row
    result = cursor.fetchone()
    connection.close()

    if result:
         return "User successfully deleted from database."


@app.route("/", methods=['GET', 'POST'])
def index():
    return render_template("index.html")
    # message = formprocessor();
        # session["email"] = request.form.get("usersignin")
        # return message
        # return jsonify(message)
        # return jsonify(value=message)

    # else:
    #     return render_template("index.html")
    # message = formprocessor()
    # print(fullname)
    # if request.method == "POST":

        # session["name"] = request.form.get("name")
        # return redirect("/")
    # return render_template("index.html", name=session.get("name"))
    # return render_template("index.html")




@app.route("/services")
def services():
    return render_template("services.html", name=session.get("name"))


# @app.route("/login", methods=["GET", "POST"])
# def login():
#     if request.method == "POST":
#         session["name"] = request.form.get("name")
#         return redirect("/")
#     return render_template("login.html")



@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")

