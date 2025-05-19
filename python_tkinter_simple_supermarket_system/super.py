from tkinter import *
import math, os, random, time
from tkinter import messagebox


class Super:
    def __init__(self, root,):
        #----- Main Window ----#
        self.root = root
        self.root.geometry('1228x650+75+40')
        self.root.title('SuperMarket By A.A')
        self.root.resizable(False, False)
        title = Label(self.root, text='Inventory', font=('Ubuntu Sans Mono', 12, 'bold'), bg='black', fg='white')
        title.pack(fill=X)
        self.root.update_idletasks()
        t_width = title.winfo_width()
        t_height = title.winfo_height()
        width = self.root.winfo_width()
        height = self.root.winfo_height()


        # Data Variables

            # Food Entries Variables
        self.food1 = IntVar()
        self.food2 = IntVar()
        self.food3 = IntVar()
        self.food4 = IntVar()
        self.food5 = IntVar()
        self.food6 = IntVar()
        self.food7 = IntVar()
        self.food8 = IntVar()
        self.food9 = IntVar() 

            # Electronics Variables
        self.electro1 = IntVar()
        self.electro2 = IntVar()
        self.electro3 = IntVar()
        self.electro5 = IntVar()
        self.electro6 = IntVar()
        self.electro7 = IntVar()
        self.electro8 = IntVar()
        self.electro9 = IntVar()
        self.electro10 = IntVar()

            # Household Variables
        self.house1 = IntVar()
        self.house2 = IntVar()
        self.house3 = IntVar()
        self.house4 = IntVar()
        self.house5 = IntVar()
        self.house6 = IntVar()
        self.house7 = IntVar()
        self.house8 = IntVar()

            # Customer Data Variabls
        self.customer_name = StringVar()
        self.customer_number = StringVar()
        self.invoice = StringVar()
        x = random.randint(1000,9999)
        self.invoice.set(str(x))

        # Checkout Totals Entries Variables
        self.household = StringVar()
        self.food = StringVar()
        self.electronics = StringVar()

        #----- Customer Data -----#
        
            #----- First Frame -----#

        F1 = Frame(self.root, bd=2, width=width/2.8, height=height/3, bg='#383836')
        F1.place(x=0, y=t_height)
        self.root.update_idletasks()
        F1_width = F1.winfo_width()
        F1_height = F1.winfo_height()
            
            #----- Corresponding Labels -----#
        
                #----- Customer Labels & Entries -----#
        
                    # Customer Data (Title)
        
        cdata = Label(F1, text=('Customer Data'), font=('Ubuntu Sans Mono', 12, 'bold'), fg='white', bg='#383836')
        cdata.place(x=F1_width/3, y=2)
        self.root.update_idletasks()
        cdata_width = cdata.winfo_width()
        cdata_height = cdata.winfo_height()

                    # Customer Name
        
        cname = Label(F1, text=('Customer Name:'), font=('Ubuntu Sans Mono', 12, 'bold'), fg='white', bg='#383836')
        cname.place(x=2, y=cdata_height+15)
        self.root.update_idletasks()
        cname_width = cname.winfo_width()
        cname_height = cname.winfo_height()
        
        # Entry
        
        Ecname = Entry(F1, width=30, font=('Ubunut Sans Mono', 8, 'bold'), textvariable=self.customer_name, fg='black', justify=CENTER)
        Ecname.place(x=cname_width+47, y=cdata_height+19)
        
                    # Customer Number
        
        cnumber = Label(F1, text=('Customer Number:'), font=('Ubuntu Sans Mono', 12, 'bold'), fg='white', bg='#383836')
        cnumber.place(x=2, y=cdata_height+cname_height+30)
        self.root.update_idletasks()
        cnumber_width = cnumber.winfo_width()
        cnumber_height = cnumber.winfo_height()
        
        # Entry
        
        Ecnumber = Entry(F1, width=30, textvariable=self.customer_number, font=('Ubunut Sans Mono', 8, 'bold'), fg='black', justify=CENTER)
        Ecnumber.place(x=cnumber_width+30, y=cdata_height+cname_height+35)

                    # Customer Invoice Number

        invoice = Label(F1, text=('Invoice Number:'), font=('Ubuntu Sans Mono', 12, 'bold'), fg='white', bg='#383836')
        invoice.place(x=2, y=cdata_height+cname_height+cnumber_height+50)
        self.root.update_idletasks()
        invoice_width = invoice.winfo_width()
        invoice_height = invoice.winfo_height()

        # Entry

        Einvoice = Entry(F1, width=30, textvariable=self.invoice,  font=('Ubunut Sans Mono', 8, 'bold'), fg='black', justify=CENTER)
        Einvoice.place(x=invoice_width+40, y=cdata_height+cname_height+cnumber_height+50)

                    # -- Search Button -- #

        sbtn = Button(F1, text="Search", font=('Ubuntu Sans Mono', 12, 'bold'), bg='#383836',cursor='hand2', fg='white', width=45, justify=CENTER)
        sbtn.place(x=1, y=F1_height-50)

            #----- Second Frame -----#
        #413e3e
        F2 = Frame(self.root, width=F1_width, height=height-F1_height-175, bg="#413e3e")
        F2.place(x=0, y=t_height+F1_height)
        self.root.update_idletasks()
        F2_width = F2.winfo_width()
        F2_height =F2.winfo_height()

                # ----- Sub-Frames -----#
        
                    # A Sub Frame For Title 
        
        F2sub1 = Frame(F2, bg='#383836', height=35, width=F2_width, border=2)
        F2sub1.config(highlightbackground="#000000", highlightthickness=1)
        F2sub1.place(x=0,y=0)
        self.root.update_idletasks()
        F2sub1_width = F2sub1.winfo_width()
        F2sub1_height = F2sub1.winfo_height()
        
                    # Title 
        
        bills = Label(F2sub1, text='Bills and Data', font=('Ubuntu Sans Mono', 12, 'bold'), bg="#383836", fg='gold')
        bills.place(x=F2_width/2.9, y=5)

                    # A Sub Frame To Display The Invoices Data
        
        F2sub2 = Frame(F2, bg='white', bd=2,height=F2_height-F2sub1_height, width=F2_width)
        F2sub2.place(x=0, y=F2sub1_height)
        
                    # The Scroll Bar
                    # THIS NEEDS TO BE UNDERSTOOD MORE ???#####
        scrol_y = Scrollbar(F2sub2, orient=VERTICAL)
        self.textarea = Text(F2sub2, yscrollcommand=scrol_y.set, wrap=WORD)
        scrol_y.pack(side=LEFT, fill=Y)
        scrol_y.config(command=self.textarea.yview)
        self.textarea.pack(fill=BOTH, expand=1)

            #----- Third Frame -----#
        
        F3 = Frame(self.root, width=F1_width+300, height=height-F1_height-F2_height, bg='#413e3e' )
        F3.place(x=0, y=t_height+F1_height+F2_height)

                # Corresponding Buttons #

                    # First Button #

        f3_btn1 = Button(F3, text='Clear Fields', width=15, font=('Ubuntu Sans Mono', 12, 'bold'), fg='black', bg='white')
        f3_btn1.place(x=5, y=15)
        self.root.update_idletasks()
        f3_btn1_width = f3_btn1.winfo_width()
        f3_btn1_height = f3_btn1.winfo_height()

                    # Second Button #

        f3_btn2 = Button(F3, width=15, font=('Ubuntu Sans Mono', 12, 'bold'), fg='black', bg='white', text='Checkout')
        f3_btn2.place(x=f3_btn1_width+30, y=15)
        self.root.update_idletasks()
        f3_btn2_width = f3_btn2.winfo_width()
        f3_btn2_height = f3_btn2.winfo_height()

                    # Third Button #

        f3_btn3 = Button(F3, width=15, font=('Ubuntu Sans Mono', 12, 'bold'), fg='black', bg='white', text='Close')
        f3_btn3.place(x=5, y=f3_btn1_height+50)
        self.root.update_idletasks()
        f3_btn3_width = f3_btn3.winfo_width()
        f3_btn3_height = f3_btn3.winfo_height()

                    # Fourth Button #

        f3_btn4 = Button(F3, width=15, font=('Ubuntu Sans Mono', 12, 'bold'), fg='black', bg='white', text='Export Invoice')
        f3_btn4.place(x=f3_btn1_width+30, y=f3_btn1_height+50)
        self.root.update_idletasks()
        f3_btn4_width = f3_btn4.winfo_width()
        f3_btn4_height = f3_btn4.winfo_height()

                # Corresponding Labels #

                # Label 1 Food

        f3_lb1 = Label(F3, text='Food Total:', font=('Ubuntu Sans Mono', 11, 'bold'), fg='white', bg="#413e3e")
        f3_lb1.place(x=f3_btn1_width+f3_btn2_width+60, y=20)
        self.root.update_idletasks()
        f3_lb1_width = f3_lb1.winfo_width()
        f3_lb1_height = f3_lb1.winfo_height()

                # Label 2 Electronics

        f3_lb2 = Label(F3, text='Electronics Total:', font=('Ubuntu Sans Mono', 11, 'bold'), fg='white', bg="#413e3e")
        f3_lb2.place(x=f3_btn1_width+f3_btn2_width+60, y=60)
        self.root.update_idletasks()
        f3_lb2_width = f3_lb2.winfo_width()
        f3_lb2_height = f3_lb2.winfo_height()

                # Label 3 Household Equipments 

        f3_lb3 = Label(F3, text='Household Total:', font=('Ubuntu Sans Mono', 11, 'bold'), fg='white', bg="#413e3e")
        f3_lb3.place(x=f3_btn1_width+f3_btn2_width+60, y=100)
        self.root.update_idletasks()
        f3_lb3_width = f3_lb3.winfo_width()
        f3_lb3_height = f3_lb3.winfo_height()

                    # Corresponding Entries For The Labels #

                    # Entry 1 Food
        f3_entry1 = Entry(F3, justify=CENTER, textvariable=self.food, width=20, font=('Ubuntu Sans Mono', 10, 'bold'))
        f3_entry1.place(x=f3_btn1_width+f3_btn2_width+f3_lb1_width+125, y=f3_lb1_height)
        
                    # Entry 2 Electronics
        f3_entry2 = Entry(F3, textvariable=self.electronics,justify=CENTER, width=20, font=('Ubuntu Sans Mono', 10, 'bold'))
        f3_entry2.place(x=f3_btn1_width+f3_btn2_width+f3_lb1_width+125, y=f3_lb1_height+40)
        
                    # Entry 3  Household Equipments
        f3_entry3 = Entry(F3, justify=CENTER, width=20, textvariable=self.household,font=('Ubuntu Sans Mono', 10, 'bold'))
        f3_entry3.place(x=f3_btn1_width+f3_btn2_width+f3_lb1_width+125, y=f3_lb1_height+80)
        

        # ----- Frame 4 ----- #

        F4 = Frame(self.root, width=F1_width-193, height=height, bg='#413e3e', bd=3,  relief=SOLID)
        F4.config(highlightbackground='white', highlightcolor='white', highlightthickness=1)
        F4.place(x=width/1.25, y=t_height)

            #----- ITEMS LIST ENTRIES AND LABELS -----#

                # Corresponding Labels And Entries # 

                # Title Label 
        f4_lbt = Label(F4, text='Food', font=('Ubuntu Sans Mono', 16, 'bold'), background='#413e3e', fg='gold')
        f4_lbt.place(x=100, y=5)


        f4_lb1 = Label(F4, text='Rice',font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f4_lb1.place(x=20, y=50)

        f4_entry1 = Entry(F4, textvariable=self.food1, justify=CENTER, width=10, font=('Ubuntu Sans Mono', 12, 'bold'))
        f4_entry1.place(x=110, y=50)

        f4_lb2 = Label(F4, text='Corn', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f4_lb2.place(x=20, y=100)

        f4_entry2 = Entry(F4, justify=CENTER, width=10, textvariable=self.food2, font=('Ubuntu Sans Mono', 12, 'bold'))
        f4_entry2.place(x=110, y=100)

        f4_lb3 = Label(F4, text='Sugar', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f4_lb3.place(x=20, y=150)

        f4_entry3 = Entry(F4, justify=CENTER, width=10, textvariable=self.food3, font=('Ubuntu Sans Mono', 12, 'bold'))
        f4_entry3.place(x=110, y=150)

        f4_lb4 = Label(F4, text='Rice', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f4_lb4.place(x=20, y=200)

        f4_entry5 = Entry(F4, justify=CENTER, width=10, textvariable=self.food4, font=('Ubuntu Sans Mono', 12, 'bold'))
        f4_entry5.place(x=110, y=200)

        f4_lb6 = Label(F4, text='Apple', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f4_lb6.place(x=20, y=250)

        f4_entry6 = Entry(F4, justify=CENTER, textvariable=self.food5, width=10, font=('Ubuntu Sans Mono', 12, 'bold'))
        f4_entry6.place(x=110, y=250)

        f4_lb7 = Label(F4, text='Banana', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f4_lb7.place(x=20, y=300)

        f4_entry7 = Entry(F4, justify=CENTER, textvariable=self.food6, width=10, font=('Ubuntu Sans Mono', 12, 'bold'))
        f4_entry7.place(x=110, y=300)

        f4_lb8 = Label(F4, text='Bread', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f4_lb8.place(x=20, y=350)

        f4_entry8 = Entry(F4, justify=CENTER, textvariable=self.food7, width=10, font=('Ubuntu Sans Mono', 12, 'bold'))
        f4_entry8.place(x=110, y=350)

        f4_lb9 = Label(F4, text='Wheat', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f4_lb9.place(x=20, y=400)

        f4_entry9 = Entry(F4, justify=CENTER, textvariable=self.food8, width=10, font=('Ubuntu Sans Mono', 12, 'bold'))
        f4_entry9.place(x=110, y=400)

        f4_lb10 = Label(F4, text='Salt', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f4_lb10.place(x=20, y=450)

        f4_entry10 = Entry(F4, justify=CENTER, width=10, textvariable=self.food9, font=('Ubuntu Sans Mono', 12, 'bold'))
        f4_entry10.place(x=110, y=450)


        # ----- Frame 5 ----- #

        F5 = Frame(self.root, width=F1_width-193, height=height, bg='#413e3e', bd=3,  relief=SOLID)
        F5.config(highlightbackground='white', highlightcolor='white', highlightthickness=1)
        F5.place(x=740, y=t_height)

            #----- ITEMS LIST [2] ENTRIES AND LABELS -----#

                # Corresponding Labels And Entries # 

                # Title Label 

        f5_lbt = Label(F5, text='Electronics', font=('Ubuntu Sans Mono', 16, 'bold'), background='#413e3e', fg='gold')
        f5_lbt.place(x=60, y=5)


        f5_lb1 = Label(F5, text='Acer', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f5_lb1.place(x=20, y=50)

        f5_entry1 = Entry(F5, justify=CENTER, width=10, textvariable=self.electro1, font=('Ubuntu Sans Mono', 12, 'bold'))
        f5_entry1.place(x=110, y=50)

        f5_lb2 = Label(F5, text='Samsung', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f5_lb2.place(x=20, y=100)

        f5_entry2 = Entry(F5, justify=CENTER, width=10, textvariable=self.electro2, font=('Ubuntu Sans Mono', 12, 'bold'))
        f5_entry2.place(x=110, y=100)

        f5_lb3 = Label(F5, text='Asus', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f5_lb3.place(x=20, y=150)

        f5_entry3 = Entry(F5, textvariable=self.electro3, justify=CENTER, width=10, font=('Ubuntu Sans Mono', 12, 'bold'))
        f5_entry3.place(x=110, y=150)

        f5_lb4 = Label(F5, text='Pixel', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f5_lb4.place(x=20, y=200)

        f5_entry5 = Entry(F5, textvariable=self.electro5, justify=CENTER, width=10, font=('Ubuntu Sans Mono', 12, 'bold'))
        f5_entry5.place(x=110, y=200)

        f5_lb6 = Label(F5, text='Dell', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f5_lb6.place(x=20, y=250)

        f5_entry6 = Entry(F5, textvariable=self.electro6, justify=CENTER, width=10, font=('Ubuntu Sans Mono', 12, 'bold'))
        f5_entry6.place(x=110, y=250)

        f5_lb7 = Label(F5, text='Lenovo', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f5_lb7.place(x=20, y=300)

        f5_entry7 = Entry(F5, justify=CENTER, width=10, textvariable=self.electro7, font=('Ubuntu Sans Mono', 12, 'bold'))
        f5_entry7.place(x=110, y=300)

        f5_lb8 = Label(F5, text='Readmi', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f5_lb8.place(x=20, y=350)

        f5_entry8 = Entry(F5, justify=CENTER, width=10, textvariable=self.electro8, font=('Ubuntu Sans Mono', 12, 'bold'))
        f5_entry8.place(x=110, y=350)

        f5_lb9 = Label(F5, text='Realmi', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f5_lb9.place(x=20, y=400)

        f5_entry9 = Entry(F5, textvariable=self.electro9, justify=CENTER, width=10, font=('Ubuntu Sans Mono', 12, 'bold'))
        f5_entry9.place(x=110, y=400)

        f5_lb10 = Label(F5, text='Infinix', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f5_lb10.place(x=20, y=450)

        f5_entry10 = Entry(F5, textvariable=self.electro10, justify=CENTER, width=10, font=('Ubuntu Sans Mono', 12, 'bold'))
        f5_entry10.place(x=110, y=450)



        # ----- Frame 6 ----- #

        F6 = Frame(self.root, width=F1_width-139, height=height-176, bg='#413e3e', bd=3,  relief=SOLID)
        F6.config(highlightbackground='white', highlightcolor='white', highlightthickness=1)
        F6.place(x=440, y=t_height)

            #----- ITEMS LIST [3] ENTRIES AND LABELS -----#

                # Corresponding Labels And Entries # 

                # Title Label 

        f6_lbt = Label(F6, text='Household', font=('Ubuntu Sans Mono', 16, 'bold'), background='#413e3e', fg='gold')
        f6_lbt.place(x=60, y=5)


        f6_lb1 = Label(F6, text='Fan', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f6_lb1.place(x=20, y=50)

        f6_entry1 = Entry(F6, textvariable=self.house1, justify=CENTER, width=10, font=('Ubuntu Sans Mono', 12, 'bold'))
        f6_entry1.place(x=110, y=50)

        f6_lb2 = Label(F6, text='Heater', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f6_lb2.place(x=20, y=100)

        f6_entry2 = Entry(F6, justify=CENTER, width=10, textvariable=self.house2, font=('Ubuntu Sans Mono', 12, 'bold'))
        f6_entry2.place(x=110, y=100)

        f6_lb3 = Label(F6, text='Blender', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f6_lb3.place(x=20, y=150)

        f6_entry3 = Entry(F6, justify=CENTER, width=10, textvariable=self.house3, font=('Ubuntu Sans Mono', 12, 'bold'))
        f6_entry3.place(x=110, y=150)

        f6_lb4 = Label(F6, text='Iron', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f6_lb4.place(x=20, y=200)

        f6_entry4 = Entry(F6, textvariable=self.house4, justify=CENTER, width=10, font=('Ubuntu Sans Mono', 12, 'bold'))
        f6_entry4.place(x=110, y=200)

        f6_lb5 = Label(F6, text='Toaster', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f6_lb5.place(x=20, y=250)

        f6_entry5 = Entry(F6, textvariable=self.house5,justify=CENTER, width=10, font=('Ubuntu Sans Mono', 12, 'bold'))
        f6_entry5.place(x=110, y=250)

        f6_lb6 = Label(F6, text='Lamp', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f6_lb6.place(x=20, y=300)

        f6_entry6 = Entry(F6, textvariable=self.house6, justify=CENTER, width=10, font=('Ubuntu Sans Mono', 12, 'bold'))
        f6_entry6.place(x=110, y=300)

        f6_lb7 = Label(F6, text='Oven', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f6_lb7.place(x=20, y=350)

        f6_entry7 = Entry(F6, textvariable=self.house7, justify=CENTER, width=10, font=('Ubuntu Sans Mono', 12, 'bold'))
        f6_entry7.place(x=110, y=350)

        f6_lb8 = Label(F6, text='Kettle', font=('Ubuntu Sans Mono', 13, 'bold'), bg='#413e3e', fg='white')
        f6_lb8.place(x=20, y=400)

        f6_entry8 = Entry(F6, textvariable=self.house8, justify=CENTER, width=10, font=('Ubuntu Sans Mono', 12, 'bold'))
        f6_entry8.place(x=110, y=400)
        self.welcome()

        # Welcome Method

    def welcome(self):
            self.textarea.delete('1.0', END)
            self.textarea.insert(END, "\t      Welcome To 1337 SuperMarket")
            self.textarea.insert(END, "\n=====================================================")
            self.textarea.insert(END, f"\nInvoice : {self.invoice.get()}\n")
            self.textarea.insert(END, f"\nName : {self.customer_name.get()}\n")
            self.textarea.insert(END, f"\nPhone : {self.customer_number.get()}\n")
            self.textarea.insert(END,"=============================================================\n")
            self.textarea.insert(END,f"\t Purchases \t\t Price \t  \t Qt \t \n")

            self.textarea.insert(END,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")



root = Tk()
ob = Super(root)



root.mainloop()