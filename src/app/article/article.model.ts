export class Article {
    votes: number;
    title: string;
    isFlagged: boolean;
    link: string;
    role: string;

    constructor(title: string, link: string, votes?: number, role?: string) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
        this.role = role || 'administrator';
        this.isFlagged = false;
    }

    voteUp() {
        this.votes += 1;
    }

    voteDown() {
        this.votes -= 1;
    }

    // domain is a utility function that extracts
    // the domain from an URL
    domain(): string {
        try {
            // e.g. http://foo.com/path/to/bar
            // splits path to hold http:// in [0] and the rest in [1]
            // stores [1] path in domainAndPath string
            const domainAndPath: string = this.link.split('//')[1];
            // e.g. foo.com/path/to/bar
            // stores foo.com in domainAndPath
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}
