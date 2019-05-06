# Civic Park DAO

## Getting Started

Setup project environment with Python 3, [virtualenv](https://virtualenv.pypa.io) and [pip](https://pip.pypa.io).

Clone the project and ```cd``` into the Civic-Park-DAO folder. There, do the following steps:

```bash
$ virtualenv project-env
$ source project-env/bin/activate
$ pip install -r requirements.txt

$ python manage.py migrate
$ python manage.py runserver
```