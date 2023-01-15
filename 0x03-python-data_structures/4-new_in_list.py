#!/usr/bin/python3
def new_in_list(my_list, idx, element):
    listlenght = len(my_list) - 1
    if (idx < 0 or idx > listlenght):
        return (my_list)
    else:
        new_list = my_list[:]
        new_list[idx] = element
        return (new_list)
