import {Presentation} from "../presentation"

export class PresentationList {
    public Presentations: Presentation[]

    constructor(presentations: Presentation[]) {
        this.Presentations = presentations
    }

    public static build(presentations: Presentation[]): PresentationList {
        return new PresentationList(presentations)
    }
}