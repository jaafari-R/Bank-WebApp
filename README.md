| Route                                         | Type      | Request                                           | Response  |
|-----------------------------------------------|-----------|---------------------------------------------------|-----------|
| /                                             | GET       |                                                   | [ Transaction ] |
| /                                             | POST      | { amount, category, vendor }                      | Transaction |
| /                                             | DELETE    | { id }                                            |           |
| /spendingPerCategory                          | GET       |                                                   | [ { category, total } ] |