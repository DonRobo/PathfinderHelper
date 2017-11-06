import {Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {PathfinderCharacter} from "../screens/character-creator/character-creator.service";
import {decamelize} from "../utils";

@Component({
  selector: 'app-editor-attribute',
  templateUrl: './editor-attribute.component.html',
  styleUrls: ['./editor-attribute.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditorAttributeComponent),
      multi: true
    }
  ]
})
export class EditorAttributeComponent implements OnInit, ControlValueAccessor, OnChanges {
  @Input() label: string;
  @Input() type: string = "number";
  @Input() enumType: any;

  enumValues: EnumValue[];

  private _value: any;
  private _onChange: (_: any) => void;
  private disabled: boolean;

  constructor() {
    this._onChange = _ => {
    };
  }

  ngOnInit() {
  }

  writeValue(obj: any): void {
    this._value = obj;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  get value(): any {
    return this._value;
  }

  set value(val: any) {
    this._value = val;
    this._onChange(val);
  }

  formatSkillModifier(value: number): string {
    const str: string = PathfinderCharacter.getSkillModifier(value).toString();
    if (str.startsWith('-'))
      return str;
    else
      return '+' + str;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['type'] && changes['type'].currentValue == 'enum') {
      this.initEnumValues();
    }
  }

  private initEnumValues() {
    let keys = Object.keys(this.enumType).map(key => this.enumType[key]).filter(value => typeof value === 'string') as string[];
    this.enumValues = [];
    for (let k of keys) {
      this.enumValues.push({
        value: this.enumType[k],
        name: k,
        label: decamelize(k)
      })
    }
  }
}

interface EnumValue {
  name: string;
  label: string;
  value: number;
}
