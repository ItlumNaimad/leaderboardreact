-- Tworzenie tabel
CREATE TABLE teams (
                       id SERIAL PRIMARY KEY,
                       name VARCHAR(100) NOT NULL,
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tournaments (
                             id SERIAL PRIMARY KEY,
                             name VARCHAR(100) NOT NULL,
                             start_date DATE NOT NULL,
                             end_date DATE,
                             status VARCHAR(20) DEFAULT 'pending',
                             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE matches (
                         id SERIAL PRIMARY KEY,
                         tournament_id INTEGER REFERENCES tournaments(id),
                         team_home_id INTEGER REFERENCES teams(id),
                         team_away_id INTEGER REFERENCES teams(id),
                         home_score INTEGER,
                         away_score INTEGER,
                         match_date TIMESTAMP NOT NULL,
                         status VARCHAR(20) DEFAULT 'scheduled',
                         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Przykładowe dane (opcjonalnie)
INSERT INTO teams (name) VALUES
                             ('FC Barcelona'),
                             ('Real Madrid'),
                             ('Bayern Munich');

-- Indeksy dla lepszej wydajności
CREATE INDEX idx_matches_tournament ON matches(tournament_id);
CREATE INDEX idx_matches_teams ON matches(team_home_id, team_away_id);