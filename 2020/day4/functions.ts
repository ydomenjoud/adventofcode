const keys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid'];

export interface Passport {
    byr: string; // (Birth Year)
    iyr: string; // (Issue Year)
    eyr: string; // (Expiration Year)
    hgt: string; // (Height)
    hcl: string; // (Hair Color)
    ecl: string; // (Eye Color)
    pid: string; // (Passport ID)
    cid?: string; // (Country ID)
}

export function extractPassports(input: string): Passport[] {
    return input
        .split(/\n\n/g) // Passports are separated by blank lines.
        .map(p => p.replace(/\n/g, ' ')) // sequence of key:value pairs separated by spaces or newlines
        .map(p => p.match(/([a-z]{3}:\S+)/g)?.map(a => a.split(':'))) // extracts fields [[key, value]]
        .map(l => {
            const p: any = {};
            l?.forEach(([key, value]) => {
                if (keys.includes(key)) {
                    p[key] = value;
                }
            });
            return p;
        });
}

export function isPasswordValid(passport: Passport): boolean {
    const nbOfKeys = Object.keys(passport).length;
    if (nbOfKeys === 8) {
        return true;
    } else if (nbOfKeys === 7 && !passport.cid) {
        return true;
    }
    return false;
}

export function isPasswordValid2(p: Passport): boolean {
    if (!isPasswordValid(p)) {
        return false;
    }

    /**
     *
     byr (Birth Year) - four digits; at least 1920 and at most 2002.
     iyr (Issue Year) - four digits; at least 2010 and at most 2020.
     eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
     hgt (Height) - a number followed by either cm or in:
             If cm, the number must be at least 150 and at most 193.
             If in, the number must be at least 59 and at most 76.
     hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
     ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
     pid (Passport ID) - a nine-digit number, including leading zeroes.
     cid (Country ID) - ignored, missing or not.
     */
    return validDate(p.byr, 1920, 2002)
        && validDate(p.iyr, 2010, 2020)
        && validDate(p.eyr, 2020, 2030)
        && validHeight(p.hgt)
        && validHcl(p.hcl)
        && validEcl(p.ecl)
        && validPid(p.pid);
}

export function validDate(v: string, min: number, max: number): boolean {
    return v.length === 4 && +v >= min && +v <= max;
}

export function validHeight(v: string): boolean {
    if (v.length < 4 || v.length > 5) {
        return false;
    }
    const [, height, unit] = v.match(/^(\d+)(cm|in)$/) || [];
    const h = +height;
    /**
     * If cm, the number must be at least 150 and at most 193.
     * If in, the number must be at least 59 and at most 76.
     */
    return (unit === 'cm' && (h >= 150 && h <= 193))
        || (unit === 'in' && (h >= 59 && h <= 76));
}

export function validHcl(v: string) {
    // a # followed by exactly six characters 0-9 or a-f.
    return /^#[0-9a-f]{6}$/.test(v);
}

export function validEcl(v: string) {
    // exactly one of: amb blu brn gry grn hzl oth.
    return 'amb blu brn gry grn hzl oth'.split(' ').includes(v);
}

export function validPid(v: string) {
    // a nine-digit number, including leading zeroes.
    return /^[0-9]{9}$/.test(v);
}
