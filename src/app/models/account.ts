export class Account {
    public name: string;
    public role: string;

    public constructor( data: any = {}) {
        this.name = data.name || '';
        this.role = data.role || '';
    }

}
