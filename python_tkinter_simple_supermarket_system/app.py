
from tkinter import *
from tkinter import messagebox
import webbrowser
import os
import sys




#----- Functions -----#



def open_links(link):
    webbrowser.open_new(link)

def login():
    user = username_entry.get()
    passwd = password_entry.get()
    if user == 'ahmad' and passwd == '12345':
        messagebox.showinfo('Successfully Authenticated','Your Credentials Are Correct!')
    else:
        messagebox.showerror('Authentication Failed', 'Your Credentials Are Not Correct!!')



#----- Main Window And Title ----#


app = Tk()
app.geometry("1024x650+50+50")
app.configure(background='#1e1919')
app.title("SuperMarket_System_Made_By_A.A")
app.resizable(height=False,width=False)
title = Label(app, fg="white", bg="#181616", text="Super Market System", font=('Ubuntu Sans Mono', 16, 'bold'))
title.pack(fill=X)
app.update_idletasks() # Just To Make Sure Every thing is rendered Properly

# Label_Height and main app window  height and width for dynamic assignments of Frames
app_height = app.winfo_height()
app_width = app.winfo_width()
t_label_height = title.winfo_height()

#----- Getting Absolute Path For The Program Main Directory -----#
# Compatible With All Systems, I Guess!? #

app_path = os.path.dirname(os.path.abspath(__file__))

#----- First Frame -----#

    #----- Left Frame -----#

F1 = Frame(app, width=250, height=650-t_label_height, bg='#131010')
F1.place(x=0,y=t_label_height)
app.update_idletasks()
F1_width = F1.winfo_width()
F1_height = F1.winfo_height()

        #----- Corresponding Labels ----#

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
lb3.place(x=45, y=lb2_height+lb1_height+25)
app.update_idletasks()
lb3_height = lb3.winfo_height()

        #----- Corresponding Buttons -----#

            # First Button

btn1 = Button(F1, font=('Ubuntu Sans Mono', 16, 'bold'),width=15, text="Facebook", fg="white",bg="#04107c", activebackground="#e2e2e9", activeforeground="#04107c", cursor="hand2", command=lambda: open_links('https://www.facebook.com/') )
btn1.place(x=20, y=lb1_height+lb2_height+lb3_height+35)
app.update_idletasks()
btn1_height = btn1.winfo_height()

            # Second Button

btn2 = Button(F1, font=('Ubuntu Sans Mono', 16, 'bold'),width=15, text="Youtube", fg="white",bg="red", activebackground="white", activeforeground="red", cursor="hand2", command=lambda: open_links('https://www.youtube.com/') )
btn2.place(x=20, y=lb1_height+lb2_height+lb3_height+btn1_height+50)
app.update_idletasks()
btn2_height = btn2.winfo_height()

            # Third Button

btn3 = Button(F1, font=('Ubuntu Sans Mono', 16, 'bold'),width=15, text="Telegram", fg="white",bg="#0f3ae6", activebackground="white", activeforeground="#0f3ae6", cursor="hand2", command=lambda: open_links('https://telegram.org/') )
btn3.place(x=20, y=lb1_height+lb2_height+lb3_height+btn1_height+btn2_height+70)
app.update_idletasks()
btn3_height = btn3.winfo_height()

            # Fourth Button

btn4 = Button(F1, font=('Ubuntu Sans Mono', 16, 'bold'),width=15, text="About Developer", fg="white",bg="black", activebackground="white", activeforeground="black", cursor="hand2", command=lambda: open_links('https://github.com/ahmadharbi0x1337'))
btn4.place(x=20, y=lb1_height+lb2_height+lb3_height+btn1_height+btn2_height+btn3_height+200)
app.update_idletasks()
btn4_height = btn4.winfo_height()

            # Fifth Button

x5height = btn1_height+lb2_height+lb3_height+btn1_height+btn2_height+btn3_height+35+btn4_height
btn5 = Button(F1, font=('Ubuntu Sans Mono', 16, 'bold'),width=15, text="About Project", fg="white",bg="green", activebackground="white", activeforeground="green", cursor="hand2", command=lambda: open_links('https://github.com/ahmadharbi0x1337/simple_projects_-1/tree/main/python_tkinter_simple_supermarket_system') )
btn5.place(x=20, y=x5height+175)
app.update_idletasks()
btn5_height = btn5.winfo_height()

            # Sixth Button

btn6 = Button(F1, font=('Ubuntu Sans Mono', 16, 'bold'),width=15, text="Close Program", fg="black",bg="gold", activebackground="black", activeforeground="gold", cursor="hand2", command=quit )
btn6.place(x=20, y=x5height+btn5_height+200)
app.update_idletasks()
btn6_height = btn6.winfo_height()


    #----- Right Frame -----#

        #----- Main Image -----#
img_path = os.path.join(app_path, "assets", "store2.png")
load_img = PhotoImage(file=img_path)
img_width = load_img.width()
app.update_idletasks()
img_lbl = Label(app, image=load_img, bg="#1e1919", height=app_height-155)
app.update_idletasks()
img_lbl.place(x=F1_width+((app_width/2)-(img_width/2))-(img_width/4), y=t_label_height)
app.update_idletasks()
img_lbl_height = img_lbl.winfo_height()

        #----- Right Frame Settings and a Small icon -----#

F2 = Frame(app, width=app_width-F1_width, height=app_height-img_lbl_height+20, bg="#1e1919")
F2.place(x=F1_width, y=img_lbl_height-30)
acc_icon = os.path.join(app_path, "assets", "account.png")
load_acc = PhotoImage(file=acc_icon)
app.update_idletasks()
icon_lbl = Label(F2, image=load_acc, bg="#1e1919")
icon_lbl.place(x=15, y=40)

                #----- Corresponding Labels -----#
                    # Username Label

username_lbl = Label(F2, text="Username", background="#1e1919", fg="white", font=('Ubuntu Sans Mon', 16, 'bold'))
username_lbl.place(x=150, y=50)

                    # Password Label

password_lbl = Label(F2, text="Password", background="#1e1919", fg="white", font=('Ubuntu Sans Mono', 16, 'bold'))
password_lbl.place(x=150, y=120)

                #----- Corresponding Entries -----#

                    # Username Entry
username_entry = Entry(F2, width=40, font=('Ubuntu Sans Mono', 11, 'bold'), fg="black", justify="center")
username_entry.place(x=300, y=55)

                    # Password Entry
password_entry = Entry(F2, width=40, justify="center",  fg="black", font=('Ubuntu Sans Mono', 11, 'bold'))
password_entry.place(x=300, y=125)

                #----- Corresponding Button -----#

login_btn = Button(F2, width=8, height=4, text="Login", font=('Ubuntu Sans Mono',12, 'bold'), fg="gold", bg="black", activebackground="gold", activeforeground="black", command=lambda: login())
login_btn.place(x=640, y=52)




# The Pythonic Way Of Running The Python Program. (Actually it's just a File Pointer, I Guess !!?)
if __name__ == "__main__":
    app.mainloop()
