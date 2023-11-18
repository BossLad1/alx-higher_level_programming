#!/usr/bin/python3
"""
Script lists all states from the
database `hbtn_0e_0_usa`.
"""

import MySQLdb
from sys import argv

"""
    Access to the database and get the states
    from the database.
    """

if __name__ == '__main__':

    db_connect = MySQLdb.connect(
        host="localhost", user=argv[1], port=3306, passwd=argv[2], db=argv[3])

    db_cursor = db_connect.cursor()

    db_cursor.execute("SELECT * FROM states WHERE name LIKE '%N'"
                      "ORDER BY states.id ASC")

    rows_selected = db_cursor.fetchall()

    for row in rows_selected:
        if row[1][0] == 'N':
            print(row)
