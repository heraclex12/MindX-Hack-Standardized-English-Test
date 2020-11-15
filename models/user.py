import base64

class UserProfile:
    """
        User Information Template.
    """
    def __init__(self, username, password, gender, email, phone):
        self.username = username
        self.password = password
        self.gender = gender
        self.email = email
        self.phone = phone
        self._hash_pass()

    def __str__(self):
        print(f'Username={self.username}\nGender={self.gender}\nEmail={self.email}\nPhone={self.phone}\n')

    def get_password(self):
        return self.password

    def _hash_pass(self):
        self.password = base64.b64encode(self.password.encode('utf-8'))