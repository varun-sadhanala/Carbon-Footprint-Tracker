from flask_mongoengine import MongoEngine

db = MongoEngine()

class User(db.Document):
    username = db.StringField(unique=True, required=True)
    password = db.StringField(required=True)

    def save(self):
        self.save()

    def delete(self):
        self.delete()
