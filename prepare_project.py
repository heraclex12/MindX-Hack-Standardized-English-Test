import nltk
import os
if __name__ == '__main__':
    nltk.download('stopwords')
    nltk.download('punkt')

    os.system('cd ui/standardized-english-test && npm install')