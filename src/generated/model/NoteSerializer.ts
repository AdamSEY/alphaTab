// <auto-generated>
// This code was auto-generated.
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
// </auto-generated>
import { Note } from "@src/model/Note";
import { JsonHelper } from "@src/io/JsonHelper";
import { BendPointSerializer } from "@src/generated/model/BendPointSerializer";
import { AccentuationType } from "@src/model/AccentuationType";
import { BendType } from "@src/model/BendType";
import { BendStyle } from "@src/model/BendStyle";
import { BendPoint } from "@src/model/BendPoint";
import { HarmonicType } from "@src/model/HarmonicType";
import { SlideInType } from "@src/model/SlideInType";
import { SlideOutType } from "@src/model/SlideOutType";
import { VibratoType } from "@src/model/VibratoType";
import { Fingers } from "@src/model/Fingers";
import { Duration } from "@src/model/Duration";
import { NoteAccidentalMode } from "@src/model/NoteAccidentalMode";
import { DynamicValue } from "@src/model/DynamicValue";
export class NoteSerializer {
    public static fromJson(obj: Note, m: unknown): void {
        if (!m) {
            return;
        } 
        JsonHelper.forEach(m, (v, k) => this.setProperty(obj, k.toLowerCase(), v)); 
    }
    public static toJson(obj: Note | null): Map<string, unknown> | null {
        if (!obj) {
            return null;
        } 
        const o = new Map<string, unknown>(); 
        o.set("id", obj.id); 
        o.set("accentuated", (obj.accentuated as number)); 
        o.set("bendType", (obj.bendType as number)); 
        o.set("bendStyle", (obj.bendStyle as number)); 
        o.set("isContinuedBend", obj.isContinuedBend); 
        o.set("bendPoints", obj.bendPoints.map(i => BendPointSerializer.toJson(i))); 
        o.set("fret", obj.fret); 
        o.set("string", obj.string); 
        o.set("octave", obj.octave); 
        o.set("tone", obj.tone); 
        o.set("percussionArticulation", obj.percussionArticulation); 
        o.set("isVisible", obj.isVisible); 
        o.set("isLeftHandTapped", obj.isLeftHandTapped); 
        o.set("isHammerPullOrigin", obj.isHammerPullOrigin); 
        o.set("hammerPullOriginNoteId", obj.hammerPullOriginNoteId); 
        o.set("hammerPullDestinationNoteId", obj.hammerPullDestinationNoteId); 
        o.set("isSlurDestination", obj.isSlurDestination); 
        o.set("slurOriginNoteId", obj.slurOriginNoteId); 
        o.set("slurDestinationNoteId", obj.slurDestinationNoteId); 
        o.set("harmonicType", (obj.harmonicType as number)); 
        o.set("harmonicValue", obj.harmonicValue); 
        o.set("isGhost", obj.isGhost); 
        o.set("isLetRing", obj.isLetRing); 
        o.set("isPalmMute", obj.isPalmMute); 
        o.set("isDead", obj.isDead); 
        o.set("isStaccato", obj.isStaccato); 
        o.set("slideInType", (obj.slideInType as number)); 
        o.set("slideOutType", (obj.slideOutType as number)); 
        o.set("vibrato", (obj.vibrato as number)); 
        o.set("tieOriginNoteId", obj.tieOriginNoteId); 
        o.set("tieDestinationNoteId", obj.tieDestinationNoteId); 
        o.set("isTieDestination", obj.isTieDestination); 
        o.set("leftHandFinger", (obj.leftHandFinger as number)); 
        o.set("rightHandFinger", (obj.rightHandFinger as number)); 
        o.set("isFingering", obj.isFingering); 
        o.set("trillValue", obj.trillValue); 
        o.set("trillSpeed", (obj.trillSpeed as number)); 
        o.set("durationPercent", obj.durationPercent); 
        o.set("accidentalMode", (obj.accidentalMode as number)); 
        o.set("dynamics", (obj.dynamics as number)); 
        return o; 
    }
    public static setProperty(obj: Note, property: string, v: unknown): boolean {
        switch (property) {
            case "id":
                obj.id = (v! as number);
                return true;
            case "accentuated":
                obj.accentuated = (JsonHelper.parseEnum<AccentuationType>(v, AccentuationType)!);
                return true;
            case "bendtype":
                obj.bendType = (JsonHelper.parseEnum<BendType>(v, BendType)!);
                return true;
            case "bendstyle":
                obj.bendStyle = (JsonHelper.parseEnum<BendStyle>(v, BendStyle)!);
                return true;
            case "iscontinuedbend":
                obj.isContinuedBend = (v! as boolean);
                return true;
            case "bendpoints":
                obj.bendPoints = [];
                for (const o of (v as (Map<string, unknown> | null)[])) {
                    const i = new BendPoint();
                    BendPointSerializer.fromJson(i, o)
                    obj.addBendPoint(i);
                }
                return true;
            case "fret":
                obj.fret = (v! as number);
                return true;
            case "string":
                obj.string = (v! as number);
                return true;
            case "octave":
                obj.octave = (v! as number);
                return true;
            case "tone":
                obj.tone = (v! as number);
                return true;
            case "percussionarticulation":
                obj.percussionArticulation = (v! as number);
                return true;
            case "isvisible":
                obj.isVisible = (v! as boolean);
                return true;
            case "islefthandtapped":
                obj.isLeftHandTapped = (v! as boolean);
                return true;
            case "ishammerpullorigin":
                obj.isHammerPullOrigin = (v! as boolean);
                return true;
            case "hammerpulloriginnoteid":
                obj.hammerPullOriginNoteId = (v! as number);
                return true;
            case "hammerpulldestinationnoteid":
                obj.hammerPullDestinationNoteId = (v! as number);
                return true;
            case "isslurdestination":
                obj.isSlurDestination = (v! as boolean);
                return true;
            case "sluroriginnoteid":
                obj.slurOriginNoteId = (v! as number);
                return true;
            case "slurdestinationnoteid":
                obj.slurDestinationNoteId = (v! as number);
                return true;
            case "harmonictype":
                obj.harmonicType = (JsonHelper.parseEnum<HarmonicType>(v, HarmonicType)!);
                return true;
            case "harmonicvalue":
                obj.harmonicValue = (v! as number);
                return true;
            case "isghost":
                obj.isGhost = (v! as boolean);
                return true;
            case "isletring":
                obj.isLetRing = (v! as boolean);
                return true;
            case "ispalmmute":
                obj.isPalmMute = (v! as boolean);
                return true;
            case "isdead":
                obj.isDead = (v! as boolean);
                return true;
            case "isstaccato":
                obj.isStaccato = (v! as boolean);
                return true;
            case "slideintype":
                obj.slideInType = (JsonHelper.parseEnum<SlideInType>(v, SlideInType)!);
                return true;
            case "slideouttype":
                obj.slideOutType = (JsonHelper.parseEnum<SlideOutType>(v, SlideOutType)!);
                return true;
            case "vibrato":
                obj.vibrato = (JsonHelper.parseEnum<VibratoType>(v, VibratoType)!);
                return true;
            case "tieoriginnoteid":
                obj.tieOriginNoteId = (v! as number);
                return true;
            case "tiedestinationnoteid":
                obj.tieDestinationNoteId = (v! as number);
                return true;
            case "istiedestination":
                obj.isTieDestination = (v! as boolean);
                return true;
            case "lefthandfinger":
                obj.leftHandFinger = (JsonHelper.parseEnum<Fingers>(v, Fingers)!);
                return true;
            case "righthandfinger":
                obj.rightHandFinger = (JsonHelper.parseEnum<Fingers>(v, Fingers)!);
                return true;
            case "isfingering":
                obj.isFingering = (v! as boolean);
                return true;
            case "trillvalue":
                obj.trillValue = (v! as number);
                return true;
            case "trillspeed":
                obj.trillSpeed = (JsonHelper.parseEnum<Duration>(v, Duration)!);
                return true;
            case "durationpercent":
                obj.durationPercent = (v! as number);
                return true;
            case "accidentalmode":
                obj.accidentalMode = (JsonHelper.parseEnum<NoteAccidentalMode>(v, NoteAccidentalMode)!);
                return true;
            case "dynamics":
                obj.dynamics = (JsonHelper.parseEnum<DynamicValue>(v, DynamicValue)!);
                return true;
        } 
        return false; 
    }
}
