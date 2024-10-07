import re
from fastapi import status
from fastapi.responses import RedirectResponse


def is_valid_email(email):
    pattern = r'^[^@]+@[^@]+\.[^@]+$'
    if re.match(pattern, email) is None:
        return False
    return True

def is_valid_phone_number(phone_number):
    pattern = r'^\d{10}$'
    if re.match(pattern, phone_number) is None:
        return False
    return True

def is_valid_password(password):
    pattern = r'^.{6,}$'
    if re.match(pattern, password) is None:
        return False
    return True
    
def is_valid_birth_date(birth_date):
    #dd-mm-yyyy
    pattern = r'^\d{2}[-/]\d{2}[-/]\d{4}$'
    if re.match(pattern, birth_date) is None:
        return False
    return True

def is_valid_information(userInformation:dict):
    if userInformation.get("phone_number", None) is None:
        return False, "Phone number must be provided"
    if userInformation.get("parents_name") is None:
        return False, "Parents name must be provided"
    if userInformation.get("password", None) is None:
        return False, "Password must be provided"
    if userInformation.get("re_enter_password", None) is None:
        return False, "Re-enter password must be provided"
    if userInformation["re_enter_password"] != userInformation["password"]:
        return False, "Password does not match"
    if userInformation.get("student_name", None) is None:
        return False, "Student name must be provided"
    if userInformation.get("birth_date", None) is None:
        return False, "Birth date must be provided"
    if is_valid_birth_date(userInformation["birth_date"]) == False:
        return False, "Birth date must be in dd-mm-yyyy format"
    if userInformation.get("sex", None) is None:  
        return False, "Sex must be provided"
    return True, "Valid information"

