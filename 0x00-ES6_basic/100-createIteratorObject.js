#!/usr/bin/node

export default function createIteratorObject(report) {
    let data = [];
    for (const departUsers of Object.values(report.allEmployees)) {
        for (const user of departUsers) {
            data.push(user);
        }
    }
    return data;
}
