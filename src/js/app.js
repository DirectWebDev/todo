var app = new Vue ({
    el: "#app",
    data: {
        tasks: [
            {desc: 'Katze fütter', fertig: false},
        ],
        tasksToDos: [
            {}
        ],
        seen: true,
        newTask: ''
    },
    computed: {
        taskOpen() {
            return this.tasks.filter(task => !task.fertig);
        },
        taskDone() {
            return this.tasks.filter(task => task.fertig);
        }
    },
    methods: {
        addTask() {
            if(this.newTask) {
                this.tasks.push({desc: this.newTask, fertig:false});
                this.newTask = '';
            } else {
                return false;
            }
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },
        changeTask(index){
            this.tasks[index].fertig = this.tasks[index].fertig ?false : true;
        }
    }
});
