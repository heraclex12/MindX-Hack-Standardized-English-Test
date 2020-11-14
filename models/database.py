from pymongo import MongoClient


class EnglishMongoDB:
    def __init__(self):
        self._instance = None

    def get_instance(self):
        if self._instance is None:
            connection = MongoClient("35.208.221.249", 27019)
            self._instance = connection.mindx_hackathon
            return self._instance

        else:
            return self._instance