import React from 'react';

export const template = {
    title: 'Basic Form to Add Employee',
    Fields: [
        {
            name:'firstName' ,
            type:'text',
            title:'First Name',
            required:{
                value:true,
                message:'Employee First Name is required'
            },
            validation:function(val){
                return val.length >=5 || 'Min Length is 5';
            }
        },
        {
            name:'lastName' ,
            type:'text',
            title:'Last Name',
            required:{
                value:true,
                message:'Employee Last Name is required'
            },
            validation:function(val){
                return val.length >=5 || 'Min Length is 5';
            }
        },
    ]
};