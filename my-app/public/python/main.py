#!/usr/bin/python
#-*- coding: utf-8 -*-
from flask import Flask
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
import requests
import sqlite3
import json
import SQLite 
import test 

# SQLiteConnection = SQLite.SQLiteConnection 
app = Flask(__name__)
app.config.update(RESTFUL_JSON=dict(ensure_ascii=False))
CORS(app, supports_credentials=True)
api = Api(app)

user_list = [{
    'username': 'Felix',
    'email': 'asdchanbird'
}]


class User(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('username', required=True,
                                 type=str, help="username is required", location="args")
        self.args = self.parser.parse_args()
        super().__init__()

    def get(self):
        # for user in user_list:
        #     if user['username'] == self.args['username']:
        return user_list
        # return {'username': None}, 404

    def post(self):
        user = {
            'username': self.args['username'],
            'email': 'asdchanbird'
        }
        user_list.append(user)
        return {'note': 'successfully create'}

    def patch(self):
        user_find = None
        for user in user_list:
            if user['username'] == self.args['username']:
                user_find = user
        if user_find:
            user_list.remove(user_find)
            user_find['email'] = '121241424'
            user_list.append(user_find)
            return {'note': 'successfully update'}

    def delete(self):
        for ind, user in enumerate(user_list):
            if user['username'] == self.args['username']:
                deleted_user = user_list.pop(ind)
                print(deleted_user)
                return {'note': 'successfully delete'}


class UserList(Resource):
    def __init__(self) -> None:
        self.SQLiteConnection = SQLite.SQLiteConnection
        self.Response = {}
        super().__init__()
    def get(self):
        Member = test.SQL_Select('*','Member', '' )
        return Member
    def post(self):
        pass
    def patch(self):
        pass
    def delete(self):
        pass

class Member(Resource):
    def __init__(self) -> None:
        super().__init__()

    def get(self):
        Member = []
        answer = test.SQL_Select('*','Member', '' )
        for item in answer:
            arrage = {
                "MemNo": item[0],
                "MemName": item[1],
                "MemAcc": item[2],
                "MemPsw": item[3],
                "MemGender": item[4],
                "MemBirth": item[5],
                "MemEmail": item[6],
                "MemCompany": item[7],
                "MemPhone": item[8],
                "MemAddress": item[9],
                "MemIntro": item[10],
                "MemProject": item[11],
            }
        Member.append(arrage)
        return Member
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username', required=True,
                                 type=str, help="username is required", location="args")
        args = parser.parse_args()
        pass
    def patch(self):
        pass
    def delete(self):
        parser = reqparse.RequestParser()
        parser.add_argument('id', required=True,
                                type=str, help="username is required", location="args")
        args = parser.parse_args()
        pass

class Project(Resource):
    def __init__(self) -> None:
        super().__init__()

    def get(self):
        answer = test.SQL_Select('*','Project', '' )
        Project = []
        for item in answer:
            arrage = {
                "ProNo": item[0],
                "ProName": item[1],
                "ProCatogory": item[2],
                "ProTargetPrice": item[3],
                "ProSupport": item[4],
                "ProCurrentPrice": item[5],
                "ProCompany": item[6],
                "ProLastDay": item[7],
                "ProImg": item[8],
                "ProText": item[9],
                "MemName": item[10],
                "ProSuccess": item[11],
            }
        Project.append(arrage)
        return Project
    def post(self):
        
        column = '(ProName,ProCatogory,ProTargetPrice,ProSupport,ProCurrentPrice,ProCompany,ProLastDay,ProImg,ProText,MemName,ProSuccess)'
        
        answer = test.SQL_Post( column,'Project', '')
        pass
    def patch(self):
        parser = reqparse.RequestParser()
        parser.add_argument('ProName', required=True,
                                type=str, help="ProName is required", location="args")
        parser.add_argument('ProNo', required=True,
                                type=str, help="ProNo is required", location="args")
        args = parser.parse_args()
        column = 'ProName = ' + "'" + args['ProName'] +  "'"
        limit = 'ProNo = ' + args['ProNo']
        # print(column)
        answer = test.SQL_Patch( column,'Project', limit )
        text = 'Success~'
        return text
    def delete(self):
        pass

# api.add_resource(User, '/user/<string:username>')
api.add_resource(User, '/user')
# api.add_resource(UserList, '/')
api.add_resource(Project, '/project')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
    # print(SQLite)
