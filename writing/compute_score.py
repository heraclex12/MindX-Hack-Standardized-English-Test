


def get_score(logit):
    min_value = 0
    max_value = 10
    overall_score = round(logit * (max_value - min_value) + min_value)
    return overall_score