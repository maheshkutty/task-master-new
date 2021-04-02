export class TaskList{
    [key: string] : {
        "name":string,
        "tasks":Array<{
            "id":string,
            "title":string,
            "description":string,
            "date":string,
            "time":string,
            "priority":string,
            "done":boolean
        }>
    }
}