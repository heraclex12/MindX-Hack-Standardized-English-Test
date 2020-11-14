from pymongo import MongoClient


class Database(object):
    def __init__(self, host='127.0.0.1', port=27017):
        self.conn = MongoClient(host=host, port=port)

    def connect_db(self, db_name):
        return self.conn.db_name

    def connect_collection(self, db_name, collection_name):
        db_name = self.conn.db_name
        return db_name.collection_name

    def set_as_default_coll(self, collection):
        self.collection = collection

    def set_as_default_db(self, db):
        self.db = db

    def get_collection(self):
        if self.collection:
            return self.collection
        else:
            return None

    def get_db(self):
        if self.db:
            return self.db
        else:
            return None
