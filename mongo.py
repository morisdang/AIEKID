import pymongo

mongo_client = pymongo.MongoClient("mongodb://100.82.49.13:27017/")

db = mongo_client["hamsbo"]


def check_password(userID, password):
    # check password match
    collection = db["login_info"]
    data = collection.find_one({"userID": userID})
    if data is None:
        print("User not found")
        return False

    if data["password"] == password:
        print("Password match")
        return True
    else:
        print("Password not match")
        return False


check_password("hoa", "hoa")
