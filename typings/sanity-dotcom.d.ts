import type { Block } from "astro-portabletext/types";

export namespace Sanity {
    interface ProfileHero {
        profileIntro: string;
        profileBody: Block | Block[];
        profileInterestBlurb: string;
        profileInterests: ProfileInterest[];
    }

    interface ProfileInterest {
        interest: string;
        highlightImage: string;
    }

    interface PrimarySection {
        primaryHeader: string;
        primaryDescription: string;
        primaryCtaText: string;
        primaryCtaUrl: string;
    }

    interface SecondarySection {
        secondaryHeader: string;
        secondaryDescription: string;
        secondaryCtaText: string;
        secondaryCtaUrl: string;
    }

    interface HomepageContent extends ProfileHero, PrimarySection, SecondarySection {
        title: string;
    }
}
