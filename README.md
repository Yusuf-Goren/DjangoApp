Cloning the repository
--> Clone the repository using the command below :
git clone https://github.com/Yusuf-Goren/DjangoApp.git

> Move into the directory where we have the project files :

cd DjangoApp

#--> Create a virtual environment :


virtualenv env


# If you are on Windows
.\env\Scripts\activate
# If you are on Linux or Mac
source env/bin/activate
Running the App
--> To run the Notes App, we use :

python manage.py runserver
⚠ Then, the development server will be started at http://127.0.0.1:8000/
