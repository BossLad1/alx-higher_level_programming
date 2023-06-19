#!/usr/bin/python3
""" script that lists all states from the database hbtn_0e_0_usa """


import MySQLdb
from sys import argv

if __name__ == '__main__':
    """create a connection to the database"""
    db = MYSQLdb.connect(host="locatlhost", port=3306, user=argv[1],
                       passwd=argv[2], db=argv[3])

    """gives ability to have multiple separate working environment"""
    db_cursor = db_connect.cursor()
    db_cursor.execute("SELECT * FROM states")

    rows = db_cursor.fetchall()
    for i in rows:
        print(i)

    """clean and close process"""
    db_cursor.close()
