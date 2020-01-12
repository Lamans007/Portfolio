from tkinter import *
import datetime
import tkinter
import time

# Function to get and update time
def current_time():
    time_label.config(text=time.asctime())
    mainwindow.after(500, current_time)

# Option function
def opt():
    try:
        n = ''
        message = inp.get()
        lvl = inp_lvl.get()
        for x in message:
            l = (ord(x)+int(lvl))
            l = chr(l)
            n += l
        with open('Encrypted message.txt', 'w') as write:
            print(n, file=write)
    except ValueError:
        pass


#Encrypting function
def encode():
    value = option.get()
    try:
        n = ''
        message = inp.get()
        lvl = inp_lvl.get()
        for x in message:
            l = (ord(x)+int(lvl))
            l = chr(l)
            n += l
        listb.insert(1000, n)
        if value == True:
            return opt()
    except ValueError:
        inp_lvl.delete(0, 35)
        inp_lvl.insert(0, 'Coding level must be numeric')


# Function for decoding
def decode():
    try:
        n = ''
        message = inp.get()
        lvl = inp_lvl.get()
        for x in message:
            l = (ord(x)-int(lvl))
            l = chr(l)
            n += l
        listb.insert(1000, n)
    except ValueError:
        inp_lvl.delete(0, 35)
        inp_lvl.insert(0, 'Coding level must be numeric')


#Initialising GUI
mainwindow = Tk()
mainwindow.title('Cypher')
mainwindow.geometry('600x420')

mainwindow.columnconfigure(0, weight=200)
mainwindow.columnconfigure(1, weight=200)
mainwindow.columnconfigure(2, weight=100)
mainwindow.columnconfigure(3, weight=100)
mainwindow.columnconfigure(4, weight=100)
mainwindow.columnconfigure(5, weight=100)
mainwindow.columnconfigure(6, weight=100)
mainwindow.columnconfigure(7, weight=100)
mainwindow.columnconfigure(8, weight=100)
mainwindow.columnconfigure(9, weight=100)
mainwindow.rowconfigure(0, weight=100)
mainwindow.rowconfigure(1, weight=100)
mainwindow.rowconfigure(2, weight=100)
mainwindow.rowconfigure(3, weight=100)
mainwindow.rowconfigure(4, weight=100)
mainwindow.rowconfigure(5, weight=100)
mainwindow.rowconfigure(6, weight=100)
mainwindow.rowconfigure(7, weight=100)
mainwindow.rowconfigure(8, weight=100)
mainwindow.rowconfigure(9, weight=100)


#Buttons
encode_button = Button(mainwindow, text='Encrypt', command=encode)
encode_button.grid(row=4, column=0, rowspan=1)

decode_button = Button(mainwindow, text='Decrypt', command=decode)
decode_button.grid(row=4, column=1, rowspan=1)

#Time label
time_label = Label(mainwindow, textvariable='', relief=RAISED)
time_label.grid(row=0, column=0, rowspan=1, columnspan=2, sticky='sesw',  padx=15)

#Listbox and scrollbar
listb = Listbox(mainwindow)
listb.grid(row=1, column=4, sticky='nsew', rowspan=7, columnspan=5)

listscroll = Scrollbar(mainwindow, orient=VERTICAL, command=listb.yview)
listscroll.grid(row=1, column=8, rowspan=7, sticky='nse')
listb['yscrollcommand'] = listscroll.set

listscroll2 = Scrollbar(mainwindow, orient=HORIZONTAL, command=listb.xview)
listscroll2.grid(row=7, column=4, columnspan=5, sticky='sew')
listb['xscrollcommand'] = listscroll2.set




#Input widgets
inp = Entry(mainwindow)
inp.grid(row=2, column=0, rowspan=1, columnspan=2, sticky='sew', padx=15)
inp.insert(0, 'Type in message')
inp_lvl = Entry(mainwindow)
inp_lvl.grid(row=3, column=0, rowspan=1, columnspan=2, sticky='sew', padx=15)
inp_lvl.insert(0, 'Type in level of coding')


#Radio buttons and frame
option = IntVar()
option.set(False)
file_option_frame = LabelFrame(mainwindow, text='Writing to file encrypted text option')
file_option_frame.grid(row=6, column=0,columnspan=2, sticky='nsew', padx=15)

file_option = Radiobutton(file_option_frame, text='Yes', value=True, variable=option, command=opt)
file_option.grid(row=6, column=0, padx=15)
file_option2 = Radiobutton(file_option_frame, text='No', value=False, variable=option, command=opt)
file_option2.grid(row=6, column=1, padx=15)


#Calling functions
current_time()
mainwindow.mainloop()






