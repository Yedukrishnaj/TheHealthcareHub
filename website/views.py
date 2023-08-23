from flask import Blueprint,render_template,request,flash, redirect, url_for
from .models import Message
from . import db


views= Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("home.html")

@views.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
            email = request.form.get('email')
            first_name = request.form.get('firstName')
            last_name = request.form.get('lastname')
            message = request.form.get('message')
            new_message = Message(email=email, first_name=first_name, last_name=last_name, Message=message)
            db.session.add(new_message)
            db.session.commit()
            flash('Message Sent!', category='success')
    return render_template("contact.html")

@views.route('/register')
def register():
    return render_template("register.html")

@views.route('/ES')
def ES():
    return render_template("ES.html")

@views.route('/BMI')
def BMI():
    return render_template("BMI.html")

@views.route('/bot')
def bot():
    return render_template("bot.html")

@views.route('/Diet')
def Diet():
    return render_template("Diet.html")

@views.route('/Language')
def Lang():
    return render_template("language.html")

@views.route('/Sleep')
def Sleep():
    return render_template("Sleep.html")

@views.route('/Cul')
def Cul():
    return render_template("Culture.html")

@views.route('/Plan')
def DPlan():
    return render_template("Planner.html")