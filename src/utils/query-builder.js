export const getDefaultGroup = () => {
    return [defaultItem];
}

export const defaultItem = {
    "condition": "and",
    "rules": [
        {
            "label": "Category",
            "field": "Category",
            "operator": "in",
            "type": "string",
            "value": [
                "Clothing",
                "Food",
                "Transportation"
            ]
        },
        {
            "label": "Amount",
            "field": "Amount",
            "operator": "equal",
            "type": "number",
            "value": 13
        }
    ]
}