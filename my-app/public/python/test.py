import sqlite3
import SQLite
import sys


# sys.setdefaultencode('utf8')

def SQL_Select(column, table, limit):
    Member = []
    sql = f'SELECT {column} FROM {table} {limit}'
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    results = cursor.execute(sql)
    answer = results.fetchall()
    conn.commit()
    return answer

def SQL_Post(column, table, data):
    sql = f'INSERT INTO {table} {column} VALUES {data}' ##COLUMN為陣列資料結構
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    results = cursor.execute(sql)
    answer = results.fetchall() 
    conn.commit()
    return answer

def SQL_Patch(column, table, limit):
    sql = f'UPDATE {table} SET {column} WHERE {limit}'
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    results = cursor.execute(sql)
    answer = results.fetchall() 
    conn.commit()
    return answer

def SQL_Delete(table, limit):
    sql = f'DELETE FROM {table} {limit}'
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    results = cursor.execute(sql)
    answer = results.fetchall() 
    conn.commit()
    return answer
