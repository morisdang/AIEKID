from fastapi import FastAPI, HTTPException

# Import redirected respoend
from fastapi.responses import RedirectResponse
import json
from fastapi.staticfiles import StaticFiles
import pymongo

# import to return status code
from fastapi import status
from validators import *    
app = FastAPI()
mongo_client = pymongo.MongoClient("mongodb://100.82.49.13:27017/")
db = mongo_client["hamsbo"]

@app.get("/")
async def get_docs():
    return RedirectResponse(url="/docs")

#login with (phone_number and email) and password
@app.get("/login") 
async def login(userID: str , password: str):
    #check if userID is mail or phone number
    if is_valid_email(userID):
        collection = db["login_info"]
        data = collection.find_one({"email": userID})
        if data is None:
            raise HTTPException(status_code=404, detail="Login failed! User not found")
        if data["password"] == password:
            return {"status": "Login success"}
    elif is_valid_phone_number(userID):
        collection = db["login_info"]
        data = collection.find_one({"phone_number": userID})
        if data is None:
            raise HTTPException(status_code=404, detail="Login failed! User not found")
        if data["password"] == password:
            return {"status": "Login success"}
        else: return {"status": "Login failed! Wrong password"}
    return {"status": "Login failed! User not found"}

#create new user with option to choose phone number or email
@app.post("/register")
async def register(userInformation: dict):
    #check if email is already used
    valid, message = is_valid_information(userInformation)
    if valid == True:
        if is_valid_phone_number(userInformation["phone_number"]):
            collection = db["login_info"]
            data = collection.find_one({"phone_number": userInformation["phone_number"]})
            if data:
                raise HTTPException(status_code=409, detail="Phone number already used")
        elif is_valid_phone_number(userInformation["phone_number"]) == False:
            raise HTTPException(status_code=400, detail="Phone number must be 10 digits")
        if userInformation.get('email',None) is not None and is_valid_email(userInformation["email"]):
            collection = db["login_info"]
            data = collection.find_one({"email": userInformation["email"]})
            if data:
                raise HTTPException(status_code=409, detail="Email already used")
            collection.insert_one({"email": userInformation["email"],"phone_number":userInformation["phone_number"], "password": userInformation["password"]})
        else: 
            collection.insert_one({"phone_number": userInformation["phone_number"], "password": userInformation["password"]})
    else: 
        raise HTTPException(status_code=400, detail=message)
    if is_valid_password(userInformation["password"])==False:
        raise HTTPException(status_code=400, detail="Password must be at least 6 characters")
    collection_userinfo = db["user_info"]
    collection_userinfo.insert_one({"phone_number":userInformation["phone_number"],"parents_name": userInformation["parents_name"], "student_name": userInformation["student_name"], "birth_date": userInformation["birth_date"], "sex": userInformation["sex"]})
    return {"status": "Register success"}

@app.











if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="100.82.49.13", port=7852)
