from tkinter import *
from tkinter import messagebox
import webbrowser
import os
import sys

#----- Main Window And Title ----#

app = Tk()
app.geometry("1024x650")
app.configure(background='#1e1919')
app.title("SuperMarket_System_Made_By_A.A")
app.resizable(height=False,width=False)
title = Label(app, fg="white", bg="#181616", text="Super Market System", font=('Ubuntu Sans Mono', 16, 'bold'))
title.pack(fill=X)
app.update_idletasks() # Just To Make Sure Every thing is rendered Properly, OtherWise you might get labeld confilcted in their height assignments, (possibly, but not always, better to be safeguarded!).
# Label_Height for dynamic assignments of Frames
t_label_height = title.winfo_height()


#----- First Frame -----#

    #----- Left Frame -----#
F1 = Frame(app, width=250, height=650-t_label_height, bg='#131010')
F1.place(x=0,y=t_label_height)
        #----- Corresponding Labels -----#
            # First Label
lb1 = Label(F1, text='SuperMarket Project', fg='white', font=('Ubuntu Sans Mon', 16, 'bold'), bg='#131010')
lb1.place(x=12, y=10)
app.update_idletasks()
lb1_height = lb1.winfo_height()
            # Second Label
lb2 = Label(F1, font=('Ubuntu Sans Mono', 10, 'bold'), bg='#131010', text='Made By Developer Ahmad Alharbi', fg='white')
lb2.place(x=12, y=lb1_height+15)
app.update_idletasks()
lb2_height = lb2.winfo_height()
            # Third Label
lb3 = Label(F1, font=('Ubuntu Sans Mono', 16, 'bold'), bg='#131010', text='Contact Info', fg='white')
lb3.place(x=25, y=lb2_height+lb1_height+25)
app.update_idletasks()
lb3_height = lb3.winfo_height()
        #----- Corresponding Buttons -----#
            # First Button
btn1 = Button(F1, width=15, font=('Ubuntu Sans Mono', 16, 'bold'), text='Facebook', fg='black' bg='#04107c')
btn1.place(x=20, y=lb1_height+lb2_height+lb3_height+35)







# The Pythonic Way Of Running The Python Program. (Actually it's just a File Pointer, I Guess !!?)
if __name__ == "__main__":
    app.mainloop()
