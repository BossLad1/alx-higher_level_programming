#!/usr/bin/python3
"""script that lists all states from the database hbtn_0e_0_usa"""
import MySQLdb
import sys

if __name__ == '__main__'
    db_connect = MYSQLdb.connect(
        host="localhost", user=argv[1], port=3306, passwd=argv[2], db=argv[3])

    db_cursor = db_connect.cursor()

    db_cursor.execute('SELECT * FROM states ORDER BY id ASC')
    states = cursor.fetchall()
    for state in states:
        print(state)

    cursor.close()
    db.close()
