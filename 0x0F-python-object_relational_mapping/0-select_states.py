#!/usr/bin/python3
"""script that lists all states from the database hbtn_0e_0_usa"""
import MySQLdb
from sys import argv

def list_states (db_user, password, db_name):
    db_connect = MYSQLdb.connect(host="localhost", user=db_user, port=3306,
                                 passwd=passord, db=db_name)

    db_cursor = db_connect.cursor()

    db_cursor.execute('SELECT * FROM states ORDER BY id ASC')
    states = cursor.fetchall()
    for state in states:
        print(state)

    cursor.close()
    db.close()

if __name__ =='__main__':
    db_user = sys.argv[1]
    password = sys.argv[2]
    db_name = sys.argv[3]

    list_states(db_user, password, db_name)
