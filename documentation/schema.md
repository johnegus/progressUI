# ECOFridge Data Schema

Users
-----


| attribute name | data type | details |
| - | - | - |
| id | integer | primary key, not null |
| first_name | varchar(35) | not null |
| last_name | varchar(35) | not null |
| email | varchar(255) | not null, unique |
| city | varchar(255) | not null |
| country | varchar(255) | not null |
| bio | varchar(200) |  |
| avatar | varchar |   |
| hashedPassword | varchar(255) | not null, (binary) |

Groceries
--------------


| attribute name | data type | details |
| - | - | - |
| id | integer | not null, primary key |
| item | varchar(255) | not null |
| type_id | integer | foreign key |
| user_id | integer | not null, foreign key |
| createdAt | date |   |



Types
--------


| attribute name | data type | details |
| - | - | - |
| id | integer | not null, primary key |
| type_name | varchar(255) | not null |
| image | varchar |   |
| days_to_expiry | integer | not null |

PantryGroceries
--------------


| attribute name | data type | details |
| - | - | - |
| id | integer | not null, primary key |
| item | varchar(255) | not null |
| type_id | integer | foreign key |
| user_id | integer | not null, foreign key |
| createdAt | date |   |



PantryTypes
--------


| attribute name | data type | details |
| - | - | - |
| id | integer | not null, primary key |
| type_name | varchar(255) | not null |
| image | varchar |   |
| days_to_expiry | integer | not null |

FreezerGroceries
--------------


| attribute name | data type | details |
| - | - | - |
| id | integer | not null, primary key |
| item | varchar(255) | not null |
| type_id | integer | foreign key |
| user_id | integer | not null, foreign key |
| createdAt | date |   |



FreezerTypes
--------


| attribute name | data type | details |
| - | - | - |
| id | integer | not null, primary key |
| type_name | varchar(255) | not null |
| image | varchar |   |
| days_to_expiry | integer | not null |

