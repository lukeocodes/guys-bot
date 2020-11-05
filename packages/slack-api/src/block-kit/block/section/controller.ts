import { Section } from '.'

export class Controller {
    public button: Section.Button.Controller;
    public checkboxes: Section.Checkboxes.Controller;
    public datepicker: Section.Datepicker.Controller;
    public image: Section.Image.Controller;
    public imageLinkButton: Section.LinkButton.Controller;
    public mrkdwn: Section.Mrkdwn.Controller;
    public multiConversationsSelect: Section.MultiConversationsSelect.Controller;
    public overflow: Section.Overflow.Controller;
    public plainText: Section.PlainText.Controller;
    public radioButtons: Section.RadioButtons.Controller;
    public staticSelect: Section.StaticSelect.Controller;
    public textFields: Section.TextFields.Controller;
    public timepicker: Section.Timepicker.Controller;
    public usersSelect: Section.UsersSelect.Controller;

    constructor() {
        this.button = new Section.Button.Controller()
        this.checkboxes = new Section.Checkboxes.Controller()
        this.datepicker = new Section.Datepicker.Controller()
        this.image = new Section.Image.Controller()
        this.imageLinkButton = new Section.LinkButton.Controller()
        this.mrkdwn = new Section.Mrkdwn.Controller()
        this.multiConversationsSelect = new Section.MultiConversationsSelect.Controller()
        this.overflow = new Section.Overflow.Controller()
        this.plainText = new Section.PlainText.Controller()
        this.radioButtons = new Section.RadioButtons.Controller()
        this.staticSelect = new Section.StaticSelect.Controller()
        this.textFields = new Section.TextFields.Controller()
        this.timepicker = new Section.Timepicker.Controller()
        this.usersSelect = new Section.UsersSelect.Controller()
    }
}