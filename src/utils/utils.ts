export function stringFormat(_string: string, ...args: string[]) {
    args.forEach((arg: string, index: number) => _string = _string.replace(`{${index}}`, arg));
    return _string;
}
