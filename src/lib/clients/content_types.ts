import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeFormFields {
    title?: EntryFieldTypes.Symbol;
    action?: EntryFieldTypes.Symbol;
    text?: EntryFieldTypes.RichText;
    email?: EntryFieldTypes.Symbol;
    button?: EntryFieldTypes.Symbol;
}

export type TypeFormSkeleton = EntrySkeletonType<TypeFormFields, "form">;
export type TypeForm<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeFormSkeleton, Modifiers, Locales>;

export function isTypeForm<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeForm<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'form'
}

export interface TypePageFields {
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
    hero?: EntryFieldTypes.AssetLink;
    video?: EntryFieldTypes.AssetLink;
    videoCaption?: EntryFieldTypes.Symbol;
    tagline?: EntryFieldTypes.Symbol;
    gallery?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    text?: EntryFieldTypes.RichText;
    footerHero?: EntryFieldTypes.AssetLink;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;

export function isTypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'page'
}
