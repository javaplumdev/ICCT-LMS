

myDictionary = {}

def myDictFun():
    userInput = input("""
    Please choose between
    (A) Add
    (D) Delete
    (E) End

    Enter:""")

    if(userInput.upper() == "A"):
        key = input("Enter a key: ")
        value = input("Enter a value: ")
        myDictionary[key] = value

        print(f"Value added: {myDictionary}")

    elif(userInput.upper() == "D"):
        myDictionary.pop()
        print(f"Value deleted: {myDictionary}")

    elif(userInput.upper() == "E"):
        print(f"Your current value is ${myDictionary}")

    tryAgain = input("Do you want to try again? (Y/N)")
    if(tryAgain.upper() == "Y"):
        myDictFun()
    if(tryAgain.upper() == "N"):
        exit()
    
myDictFun()
